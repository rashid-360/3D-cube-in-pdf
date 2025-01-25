import React from 'react'
import { saveAs } from 'file-saver';
import { useState } from 'react';
function Template({r,g,b,side1,side2,side3,side4,side5,side6,Xrotationspeed,Yrotationspeed,diagonal,cubesize}) {

console.log(r,g,b,side1,Xrotationspeed,diagonal)
var t=`
%PDF-1.7
1 0 obj
<< /Type /Catalog 
   /Pages 2 0 R
   /OpenAction 7 0 R
   /AcroForm << /Fields [30 0 R 31 0 R 32 0 R 33 0 R 34 0 R 35 0 R 36 0 R 37 0 R 38 0 R 39 0 R 40 0 R 41 0 R 42 0 R 43 0 R 44 0 R 45 0 R 46 0 R 47 0 R 48 0 R 49 0 R 50 0 R 51 0 R 52 0 R 53 0 R 54 0 R 55 0 R 56 0 R 57 0 R 58 0 R 59 0 R 60 0 R 61 0 R 62 0 R 63 0 R 64 0 R 65 0 R 66 0 R 67 0 R 68 0 R 69 0 R 70 0 R 71 0 R 72 0 R 73 0 R 74 0 R 75 0 R] /NeedAppearances true >>
>>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj

3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Annots [30 0 R 31 0 R 32 0 R 33 0 R 34 0 R 35 0 R 36 0 R 37 0 R 38 0 R 39 0 R 40 0 R 41 0 R 42 0 R 43 0 R 44 0 R 45 0 R 46 0 R 47 0 R 48 0 R 49 0 R 50 0 R 51 0 R 52 0 R 53 0 R 54 0 R 55 0 R 56 0 R 57 0 R 58 0 R 59 0 R 60 0 R 61 0 R 62 0 R 63 0 R 64 0 R 65 0 R 66 0 R 67 0 R 68 0 R 69 0 R 70 0 R 71 0 R 72 0 R 73 0 R 74 0 R 75 0 R] >>
endobj

4 0 obj
<< /Length 64 >>
stream
BT
/F1 12 Tf

100 700 Td

ET
endstream
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>
endobj
30 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 700 600 710]
  /FT /Tx
  /T (Textbox1)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

31 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 690 600 700]
  /FT /Tx
  /T (Textbox2)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

32 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 680 600 690]
  /FT /Tx
  /T (Textbox3)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

33 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 670 600 680]
  /FT /Tx
  /T (Textbox4)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

34 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 660 600 670]
  /FT /Tx
  /T (Textbox5)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

35 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 650 600 660]
  /FT /Tx
  /T (Textbox6)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

36 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 640 600 650]
  /FT /Tx
  /T (Textbox7)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

37 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 630 600 640]
  /FT /Tx
  /T (Textbox8)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

38 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 620 600 630]
  /FT /Tx
  /T (Textbox9)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

39 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 610 600 620]
  /FT /Tx
  /T (Textbox10)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

40 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 600 600 610]
  /FT /Tx
  /T (Textbox11)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

41 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 590 600 600]
  /FT /Tx
  /T (Textbox12)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

42 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 580 600 590]
  /FT /Tx
  /T (Textbox13)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

43 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 570 600 580]
  /FT /Tx
  /T (Textbox14)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

44 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 560 600 570]
  /FT /Tx
  /T (Textbox15)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

45 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 550 600 560]
  /FT /Tx
  /T (Textbox16)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

46 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 540 600 550]
  /FT /Tx
  /T (Textbox17)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

47 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 530 600 540]
  /FT /Tx
  /T (Textbox18)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

48 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 520 600 530]
  /FT /Tx
  /T (Textbox19)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

49 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 510 600 520]
  /FT /Tx
  /T (Textbox20)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

50 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 500 600 510]
  /FT /Tx
  /T (Textbox21)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

51 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 490 600 500]
  /FT /Tx
  /T (Textbox22)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

52 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 480 600 490]
  /FT /Tx
  /T (Textbox23)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

53 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 470 600 480]
  /FT /Tx
  /T (Textbox24)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

54 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 460 600 470]
  /FT /Tx
  /T (Textbox25)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

55 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 450 600 460]
  /FT /Tx
  /T (Textbox26)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

56 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 440 600 450]
  /FT /Tx
  /T (Textbox27)
  /F 4
  /DA (/Courier 12 Tf ${r} ${g} ${b} rg) 
  
>>
endobj

57 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 430 600 440]
  /FT /Tx
  /T (Textbox28)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

58 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 420 600 430]
  /FT /Tx
  /T (Textbox29)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

59 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 410 600 420]
  /FT /Tx
  /T (Textbox30)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

60 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 400 600 410]
  /FT /Tx
  /T (Textbox31)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

61 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 390 600 400]
  /FT /Tx
  /T (Textbox32)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

62 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 380 600 390]
  /FT /Tx
  /T (Textbox33)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

63 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 370 600 380]
  /FT /Tx
  /T (Textbox34)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

64 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 360 600 370]
  /FT /Tx
  /T (Textbox35)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

65 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 350 600 360]
  /FT /Tx
  /T (Textbox36)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

66 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 340 600 350]
  /FT /Tx
  /T (Textbox37)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

67 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 330 600 340]
  /FT /Tx
  /T (Textbox38)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

68 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 320 600 330]
  /FT /Tx
  /T (Textbox39)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

69 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 310 600 320]
  /FT /Tx
  /T (Textbox40)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

70 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 300 600 310]
  /FT /Tx
  /T (Textbox41)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

71 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 290 600 300]
  /FT /Tx
  /T (Textbox42)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

72 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 280 600 290]
  /FT /Tx
  /T (Textbox43)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

73 0 obj
<<
  /Type /Annot
  /Subtype /Widget
  /Rect [50 270 600 280]
  /FT /Tx
  /T (Textbox44)
  /F 4
/DA (/Courier 12 Tf ${r} ${g} ${b} rg)>>
endobj

























7 0 obj
<<
  /Type /Action
  /S /JavaScript
  /JS 8 0 R
>>
endobj
8 0 obj
<< /Length 275 >>
stream










const centerX = ${diagonal[0]};
const centerY = ${diagonal[1]};

const size = 21;
const cubeSize = ${cubesize};

// Generate cube coordinates
let coordinates = [];

for (let x = -cubeSize; x <= cubeSize; x++) {
    for (let y = -cubeSize; y <= cubeSize; y++) {
        coordinates.push([x, y, -cubeSize, '${side1}']);
        coordinates.push([x, y, cubeSize, '${side2}']);
    }
    for (let z = -cubeSize; z <= cubeSize; z++) {
        coordinates.push([x, cubeSize, z, '${side3}']);
        coordinates.push([x, -cubeSize, z, '${side4}']);
    }
}

for (let y = -cubeSize; y <= cubeSize; y++) {
    for (let z = -cubeSize; z <= cubeSize; z++) {
        coordinates.push([-cubeSize, y, z, '${side5}']);
        coordinates.push([cubeSize, y, z, '${side6}']);
    }
}

const centerTranslation = [
    -coordinates.reduce((sum, p) => sum + p[0], 0) / coordinates.length,
    -coordinates.reduce((sum, p) => sum + p[1], 0) / coordinates.length,
    -coordinates.reduce((sum, p) => sum + p[2], 0) / coordinates.length
];

function translate(points, dx, dy, dz) {
    points.forEach((p) => {
        p[0] += dx;
        p[1] += dy;
        p[2] += dz;
    });
}

function rotator(x, y, z, angle, px, py, lx, ly) {
    const directionFixerX = px - lx > 0 ? 1 : -1;
    const directionFixerY = py - ly > 0 ? 1 : -1;
    const anglex = (angle * directionFixerX * Math.PI) / 180;
    const angley = (angle * directionFixerY * Math.PI) / 180;

    const x1 = x * Math.cos(anglex) + z * Math.sin(anglex);
    const y1 = y;
    const z1 = -x * Math.sin(anglex) + z * Math.cos(anglex);

    const x2 = x1;
    const y2 = y1 * Math.cos(angley) - z1 * Math.sin(angley);
    const z2 = y1 * Math.sin(angley) + z1 * Math.cos(angley);

    return [x2, y2, z2];
}

function rotateWithAngle(points, angle, px, py, lx, ly) {
    points.forEach((p, i) => {
        const [x, y, z] = rotator(p[0], p[1], p[2], angle, px, py, lx, ly);
        points[i] = [x, y, z, p[3]];
    });
}

function plot(points, degree, px, py, lx, ly) {
    rotateWithAngle(points, degree, px, py, lx, ly);

    // Sort points by depth (z-coordinate) for correct rendering
    points.sort((a, b) => b[2] - a[2]);

    const pointsDict = {};
    points.forEach(([x, y, z, char]) => {
        const key = \`\${Math.round(x)},\${Math.round(y)}\`;
        // Only store the point with the highest z-coordinate (closest to viewer)
        if (!pointsDict[key] || z > pointsDict[key].z) {
            pointsDict[key] = { char, z };
        }
    });

    const buffer = [];
    for (let y = size; y >= -size; y--) {
        let line = ' ';
        for (let x = -size; x <= size; x++) {
            const point = pointsDict[\`\${x},\${y}\`];
            line += point ? point.char : '    ';
        }
        buffer.push(line);
    }

    for (let y = 1; y < 43; y++) {
        let t = "Textbox" + y;
        this.getField(t).value = buffer[y];
    }
}

function autoSpin(points) {
    let spinAngleX = 0;
    
    
    function spin() {
        spinAngleX += ${Xrotationspeed}; // X-axis rotation speed
        
        
        
        rotateWithAngle(points, spinAngleX, centerX, centerY, 0, 0);
       
        
        // Plot the rotated points
        plot(points, 0, centerX, centerY, 0, 0);
        
        // Continue spinning
        requestAnimationFrame(spin);
    }
    
    // Start spinning
    spin();
}

function main() {
    translate(coordinates, ...centerTranslation);

    // Start auto-spinning
    autoSpin(coordinates);

 
}

// Call main to start the visualization


var timer = app.setInterval("main()", 10);




































endstream
endobj
xref
0 10
0000000000 65535 f
0000000010 00000 n
0000000167 00000 n
0000000221 00000 n
0000000320 00000 n
0000000450 00000 n
0000000527 00000 n
0000000697 00000 n
0000000764 00000 n
0000000854 00000 n
trailer
<< /Root 1 0 R /Size 10 >>
startxref
1079
%%EOF



`




const HandlePdf=()=>{

    const blob = new Blob([t], { type: 'application/pdf' });
    
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL, '_blank'); 

}













  return (
    <div>

        <button onClick={HandlePdf}>Generate</button>
       
    </div>
  )
}

export default React.memo(Template)