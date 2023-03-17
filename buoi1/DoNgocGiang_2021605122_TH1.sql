CREATE DATABASE QLBanHang;

GO
USE QLBanHang;

CREATE TABLE HangSX(
	MaHangSX nchar(10) not null primary key,
	TenHang nvarchar(20) not null,
	DiaChi nvarchar(30) not null,
	SoDT nvarchar(20) not null,
	Email nvarchar(30)
)


CREATE TABLE SanPham(
	MaSP nchar(10) not null primary key,
	MaHangSX nchar(10) not null Foreign Key References HangSX(MaHangSX),
	TenSP nvarchar(20) not null,
	SoLuong int,
	MauSac nvarchar(20) not null,
	GiaBan money not null,
	DonViTinh nchar(10),
	MoTa nvarchar(max)
)

CREATE TABLE NhanVien(
	MaNV nchar(10) not null primary key,
	TenNV nvarchar(20) not null,
	GioiTinh nchar(10) not null,
	DiaChi nvarchar(30) not null,
	SoDT nvarchar(20) not null,
	Email nvarchar(30) not null,
	TenPhong nvarchar(30) not null
)

CREATE TABLE PNhap(
	SoHDN nchar(10) not null primary key,
	NgayNhap date not null,
	MaNV nchar(10) not null foreign key references NhanVien(MaNV)
)

CREATE TABLE Nhap(
	SoHDN nchar(10) not null primary key(SoHDN, MaSP)
	foreign key references PNhap(SoHDN),
	MaSP nchar(10) foreign key references SanPham(MaSP),
	SoLuongN int not null,
	DonGiaN money
)

CREATE TABLE PXuat(
	SoHDX nchar(10) not null primary key,
	NgayXuat Date,
	MaNV nchar(10) not null foreign key references NhanVien(MaNV)
)

CREATE TABLE Xuat(
	SoHDX nchar(10) not null primary key(SoHDX, MaSP)
	foreign key references PXuat(SoHDX),
	MaSP nchar(10) not null
	foreign key references SanPham(MaSP),
	SoLuongX int
)

DROP DATABASE QLBanHang;