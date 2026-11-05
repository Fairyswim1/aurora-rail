export function records(point,type,late=false){const [x,y]=point;return (late?[1,4,6]:[1,2,3]).map(k=>[x*k,type==='direct'?y*k:y/k])}
export function matchesRecord(rows,point,type){return rows.every(([x,y])=>type==='direct'?Math.abs(y*point[0]-point[1]*x)<1e-9:Math.abs(x*y-point[0]*point[1])<1e-9)}
export function comparison(a,b,type){const [x,y]=a,[u,v]=b;return type==='direct'?`정비례: x가 ${u/x}배일 때 y도 ${v/y}배. 두 역의 y÷x는 모두 ${y/x}예요.`:`반비례: x가 ${u/x}배일 때 y는 ${v/y}배. 두 역의 x×y는 모두 ${x*y}예요.`}
