-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 06.09
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_hrd_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` char(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` enum('active','inactive','terminated') NOT NULL,
  `hired_on` date NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employees`
--

INSERT INTO `employees` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`, `timestamp`) VALUES
(1, 'Arya Isnaidi', 'Laki-Laki', '085788241715', 'Depok, Cimanggis', 'aryaisnaidi01@gmail.com', 'active', '2024-01-19', '2024-01-19 02:09:21'),
(3, 'John Doe', 'Male', '123-456-7890', '123 Main Street, Cityville', 'john.doe@example.com', 'active', '2022-01-01', '2022-02-15 03:30:00'),
(4, 'Fikri', 'Male', '123-456-7890', '123 Main Street, Cityville', 'john.doe@example.com', 'inactive', '2022-01-01', '2022-02-15 03:30:00'),
(5, 'Fikri', 'Male', '123-456-7890', '123 Main Street, Cityville', 'john.doe@example.com', 'inactive', '2022-01-01', '2022-02-15 03:30:00'),
(7, 'Fake', 'Famale', '123-456-7890', '123 Main Street, Cityville', 'john.doe@example.com', 'terminated', '2022-01-01', '2024-01-19 03:50:43'),
(9, 'John Doe', 'Male', '123-456-7890', '123 Main Street, Cityville', 'john.doe@example.com', 'active', '2022-01-01', '2022-02-15 03:30:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
