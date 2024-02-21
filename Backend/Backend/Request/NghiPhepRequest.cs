﻿namespace Backend.Request
{
    public class NghiPhepRequest
    {
        public DateOnly Ngaybatdau { get; set; }

        public DateOnly Ngayketthuc { get; set; }

        public string Loainghiphep { get; set; } = null!;

        public string Lydo { get; set; } = null!;

        public string Trangthai { get; set; } = null!;

        public int Manguoidung { get; set; }

        public string? Lydotuchoi { get; set; }
    }
}
