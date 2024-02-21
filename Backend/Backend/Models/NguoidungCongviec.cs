using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class NguoidungCongviec
{
    public int Manguoidung { get; set; }

    public int Macongviec { get; set; }

    public string TinhtrangCv { get; set; } = null!;

    public virtual Congviec MacongviecNavigation { get; set; } = null!;

    public virtual Nguoidung ManguoidungNavigation { get; set; } = null!;
}
