function iopu(n) {
    n = n & 0xFF
    return n > 127 ? n - 256 : n
}
async function ruivc(x, k) {
    const iopo = await fetch("./iopl.k")
    const jkjl = new Uint8Array(await iopo.arrayBuffer())
    let n = jkjl.length
    let y = [-70, -53, 100, -86, -104, -65, 46, 92, -39, -36, 22, -65, 62, -127, -110, 47, -10, 59, -25, 55, -35, -83, 64, -96, -120, 33, -5, -12, -101, -56, 110, 82, 40, -106, -33, 107, 104, 119, -25, -52, 10, -78, -22, -119, -74, 15, 74, 96, 60, -76]
    for (let i = 0; i < n; i++)
        jkjl[i] = (iopu(jkjl[i]) ^ x.codePointAt(i % x.length) ^ iopu(y[i % y.length]) ^ iopu(k.codePointAt(i % k.length))) & 0xFF
    const hhhjy = new Blob([jkjl], { type: "image/jpeg" })
    const jkll = URL.createObjectURL(hhhjy)
    const roii = document.createElement("img")
    roii.src = jkll
    roii.alt = "No Render"
    roii.width = 200
    roii.height = 300
    const ggut = document.getElementById("image")
    ggut.innerHTML = ""
    ggut.appendChild(roii)
    const rr = await fetch("./yuik.lk")
    const dr = new Uint8Array(await rr.arrayBuffer())
    for (let i = 0; i < dr.length; i++)
        dr[i] = (x.codePointAt(i % x.length) ^ iopu(y[i % y.length]) ^ iopu(dr[i]) ^ iopu(k.codePointAt(i % k.length))) & 0xFF
    let v = []
    for (let i of dr)
        v.push(String.fromCodePoint(i))
    const ewrq = document.getElementById("information")
    ewrq.innerHTML = ""
    ewrq.innerHTML = v.join("") + " 🥺</div >";
}
function go() {
    ruivc(document.getElementById("y").value, document.getElementById("x").value)
}