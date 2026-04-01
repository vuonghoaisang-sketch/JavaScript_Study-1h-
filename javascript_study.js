const tinhDiemTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};
const xepLoai = (diemTrungBinh) => {
  if (diemTrungBinh >= 9) {
    return "Xuất sắc";
  } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
    return "Giỏi";
  } else if (diemTrungBinh >= 7 && diemTrungBinh < 8) {
    return "Khá";
  } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

console.log(`Diem trung binh: ${tinhDiemTrungBinh(diemToan, diemVan, diemAnh)}
XepLoai: ${xepLoai(tinhDiemTrungBinh(diemToan, diemVan, diemAnh))}`);
