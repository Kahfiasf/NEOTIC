function tambahAnggota() {
  const nama = prompt("Masukkan nama anggota baru:");
  if (nama) {
    const div = document.createElement("div");
    div.className = "anggota";
    div.textContent = nama;
    document.getElementById("listAnggota").appendChild(div);
  }
}
