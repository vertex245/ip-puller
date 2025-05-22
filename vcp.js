// ==UserScript==
// @name         non-VCP dependant xray
// @namespace    http://tampermonkey.net/
// @version      2025-04-26
// @description  try to take over the world!
// @author       You
// @match        https://voxiom.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
// @grant        none
// ==/UserScript==

window.RenderBlocks = {
  // empty
};

function getStrings(t) {
	var n = !1,
		r = !1,
		i = !1;
	return strings = [], t.split("").forEach(function(e, s) {
		(n ? e == i : '"' == e || "`" == e || "'" == e) && (n ? (strings.push(t.substr(r, s - r + 1)), n = !1, r = !1, i = !1) : (n = !0, r = s, i = e))
	}), strings
}

function hashCode(t) {
	var n, r, i = 0;
	if (0 === t.length) return i;
	for (n = 0; n < t.length; n++) i = (i << 5) - i + (r = t.charCodeAt(n)), i |= 0;
	return i
}

function subStituteStrings(t, n) {
	var r = t;
	return n.forEach(function(t) {
		r = r.replace(t, "STRING_" + hashCode(t).toString().replace("-", "_"))
	}), r
}

function insertStringsAsVariables(t, n) {
	return insert = "", n.forEach(function(t) {
		insert += "STRING_" + hashCode(t).toString().replace("-", "_") + "=" + t + ";"
	}), insert + t
}

function doIt(t) {
	return insertStringsAsVariables(subStituteStrings(t, getStrings(t)), getStrings(t))
};
var r = {
	"if(": " f(",
	"if (": " f (",
	"if  (": " f  (",
	else: "el",
	"var ": "v ",
	function: "func",
	return: "ret",
	switch: "sw",
	"const ": "con ",
	default: "def",
	case: "case",
	break: "break",
	class: "cl",
	extends: "ext",
	super: "sup"
};
var c = `
func hookMain(){
  cl handler ext WebSocket {
    constructor(){
      sup(...arguments);
      window.ws = this;

      this.onmessage = new Proxy(func(e){

        //console.log(e.data);
        hookOnmessage(e.data);

        },{});

    }
  }

  WebSocket = new Proxy(handler,{});
}

func hookOnmessage(a) {
  f(a.byteLength > 600) {
    //console.log(a,nativePacketParse(a));
    XRAY(a);
  }
}

func nativePacketParse(tk) {
  //yoinked directly from voxiom's code and adapted to my language and also adjusted to be more independent (to not use some variables from voxiom's internals)
  v tl = new DataView(tk);
  if (this['rqJ'] = tl['getInt16'](0x1),
      this['rqr'] = tl['getInt16'](0x3),
      this['rqa'] = tl['getInt16'](0x5),
      this['rzp'] = tl['getUint16'](0x7),
      this['rIx'] = 0x9,
      this['rzp'] > 0x0) {
    v U0 = tl['getUint8'](this['rIx']) > 0x0;
    this['rIx'] += 0x1,
      this['rzc'] = new Uint8Array(32*32*32);//x8['Z']['rth']);
    v U1 = 0x0;
    f (U0) {
      v U2 = tl['getUint16'](this['rIx']);
      this['rIx'] += 0x2;
      for (v U3 = 0x0; U3 < U2; U3++) {
        v U4 = tl['getUint8'](this['rIx']);
        this['rIx'] += 0x1;
        v U5 = tl['getUint8'](this['rIx']);
        this['rIx'] += 0x1;
        for (v U6 = 0x0; U6 < U4; U6++)
          this['rzc'][U1++] = U5;
      }
    } el {
      for (v U7 = 0x0; U7 < 32*32*32; U7++)//x8['Z']['rth']; U7++)
        this['rzc'][U7] = tl['getUint8'](this['rIx']),
          this['rIx'] += 0x1;
    }
  }

  //return an object with all assosciated data
  ret {
    array: rzc,
    position: {
      x: rqJ,
      y: rqr,
      z: rqa
    }
  }
}

func XRAY_COMB(chunk) {
  // 'chunk' is a 32x32x32 array containing all of the game's block IDs                  '

  //IDs here
  v targetIDs = {
    goldenChest: 25,
    ironChest: 24,
    woodenChest: 23,
    bombChest: 15,
    ironOre: 20,
    emeraldOre: 17,
    rubyOre: 18,
    sapphireOre: 19,
    sulfurOre: 42,
    don1: 12,
    don2: 11,
    don3: 10,
  }

  //initialize result object
  v result = {
    goldenChest: [], //will contain the coordinates found
    ironChest: [], //... ^
    woodenChest: [], //
    bombChest: [],
    ironOre: [],
    emeraldOre: [],
    rubyOre: [],
    sapphireOre: [],
    sulfurOre: [],
    don1: [],
    don2: [],
    don3: [],
  }

  //find it
  for(v i = 0; i < 32 * 32 * 32; i++) {
    v idx = i;

    v pos = chunkArrayToWorldCords(chunk.position.x, chunk.position.y, chunk.position.z, chunk.array, idx);

    Object.values(targetIDs).forEach(func(f,g) {
      if(chunk.array[idx] == f) {
        //FOUND THE SHIT 🤑
        result[Object.keys(targetIDs)[g]].push(Object.values(pos)[0]);
      }
    });
  }

  //debug print
  //console.log(result);

  //return found
  ret result;
}

//math done by Doctor8296, long time colleague (I reuse this snippet in many of my voxiom related projects for block-related math)
//THANKS TO DOCTOR
func chunkArrayToWorldCords(x, y, z, array, index) {
  con result = {};
  //for (let index = 0; index < 32768; index++) {
      con block = array[index];
      con cords = {
          x: Math.floor(index / 1024) + x * 32,
          y: Math.floor(index % 1024 / 32) + y * 32,
          z: index % 32 + z * 32
      };
      block in result ? result[block].push(cords) : result[block] = [cords];
  //}
  ret result;
}
//THANKS TO DOCTOR END

func XRAY(data) {
  //first, we process the raw packet we recieved from the server
  v processedChunkObject = nativePacketParse(data);
  //then we 'comb' through it to find all the blocks we want
  v foundBlocks = XRAY_COMB(processedChunkObject);
  //then we render over the blocks! I am however, too lazy to implement this function myself, because I already did enough for 10$. This is on you now
  XRAY_RENDER(foundBlocks);
}

v first = true;

//TODO - IMPLEMENT
func XRAY_RENDER(foundBlocks) {
  //found blocks structure:
  /*

  -> {
    goldenChest: [
      {
        x: ..., (NOTE THE X,Y,Z COORDS ARE IN VOXIOM  BLOCK COORDS SO ITS MULTIPLIED OR DIVIDED BY A FACTOR OF 2)
        y: ...,                                       ------------
        z: ...
      }
    ],
    ...
  }

  */

  //PS if you can't figure this out you are a retarded faggot as I gave literally all the instructions u need this isn't hard 💀

  //console.log(foundBlocks); //just a placeholder, remove this cuz logging to console causes lots of lag
  for (let key in foundBlocks) {
    for (let block of foundBlocks[key]) {
      f (!first) {
        (RenderBlocks[key] = RenderBlocks[key] || []).push(block[0]);
      }
    }
  }
first = false;
}

//start
hookMain();

//window.nativePacketParse = nativePacketParse;
                                                                                                                                                                                                                                                                                                                    `;
var replacing = subStituteStrings(c, getStrings(c));
Object.values(r).forEach(function(a, b) {
	replacing = replacing.replaceAll(a, Object.keys(r)[b])
});
replacing = insertStringsAsVariables(replacing, getStrings(c));
eval(replacing);
