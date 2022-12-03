-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2022 at 04:25 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `kode_hotel` int(11) DEFAULT NULL,
  `nama_hotel` varchar(255) DEFAULT NULL,
  `harga_hotel` int(11) DEFAULT NULL,
  `alamat_hotel` varchar(255) DEFAULT NULL,
  `kota_hotel` varchar(255) DEFAULT NULL,
  `tentang_hotel` varchar(255) DEFAULT NULL,
  `rating_hotel` int(11) DEFAULT NULL,
  `poto_hotel` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_hotel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `kode_hotel`, `nama_hotel`, `harga_hotel`, `alamat_hotel`, `kota_hotel`, `tentang_hotel`, `rating_hotel`, `poto_hotel`, `createdAt`, `updatedAt`, `id_hotel`) VALUES
(1, 5424, 'Grenn forest', 500000, 'Kabupaten Bandung Barat, tepatnya di Jalan Sersan Bajuri No. 102, Bandung.', 'BANDUNG', 'Green Forest Resort berada di Kabupaten Bandung Barat, tepatnya di Jalan Sersan Bajuri No. 102, Bandung. Terletak di daerah pegunungan, membuat resor ini cocok bagi tamu yang menginginkan suasana alam selama bermalam. Selain suasananya yang tenang, akomod', 9, 'gf.jpg', '2022-11-26 03:07:55', '2022-11-26 03:07:55', NULL),
(2, 82728, 'The gaia Hotel', 2099999, 'The Gaia Hotel Bandung No.430 Jalan Doktor Setiabudi, 40143 Lembang', 'BANDUNG', 'The Gaia Hotel Bandung memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega. The Gaia Hotel Bandung adalah tempat bermalam yang tepat bagi Anda yang berlibur bersama keluarga. Nikmati segala fasilitas hiburan untuk Anda dan keluarga. Jika Anda', 8, 'gia.jpg', '2022-11-27 09:39:30', '2022-11-27 09:39:30', NULL),
(3, 82737, 'Valore Hotel', 350009, 'Valore Hotel Jl. Raya Baros No.57, 40521 Cimahi', 'CIMAHI', 'Tentang:Valore Hotel adalah pilihan yang tepat. Karena meski murah, akomodasi ini menyediakan fasilitas memadai dan pelayanan yang tetap terjaga mutunya. Valore Hotel memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega. Pelayanan memuaskan se', 7, 'valore.jpg', '2022-11-27 10:14:35', '2022-11-27 10:14:35', NULL),
(4, 82767, 'The Johns Cianjur Aquatic Resort', 899009, 'Kawasan Hutan Kota Cianjur Kp. Tangkil. Ds. babakan Karet Panembong Cianjur – Jawa Barat 43251', 'CIANJUR', 'The Jhons Cianjur Aquatic Resort adalah pilihan yang tepat. Hotel ini memiliki ruang pertemuan yang luas dan dilengkapi dengan berbagai fasilitas penunjang. The Jhons Cianjur Aquatic Resort adalah tempat bermalam yang tepat bagi Anda yang berlibur bersama', 8, 'johns.jpg', '2022-11-27 10:20:17', '2022-11-27 10:20:17', NULL),
(5, 82729, 'Lorin Sentul Hotel', 475009, 'Jalan Sirkuit Sentul KM 32 (Jalan Citereup Bogor), Bogor, Jawa Barat 16710', 'BOGOR', 'Lorin Sentul Hotel merupakan akomodasi yang bisa dijadikan pilihan apabila Anda berkunjung ke Bogor. Berdekatan dengan Sentul International Convention Center, hotel bintang 4 ini akan memberikan pengalaman menginap yang berkesan. Bangunan hotel mewah yang', 7, 'lorin.jpg', '2022-11-27 10:24:44', '2022-11-27 10:24:44', NULL),
(6, 82799, 'Hotel Tirta Kencana Cipanas', 599008, 'Hotel Tirta Kencana Cipanas Garut Resorts Jln Cipanas Baru Garut Jawa Barat, Tarogong Kaler, Garut, Jawa Barat, Indonesia, 44151', 'GARUT', 'Hotel Tirta Kencana Cipanas Garut merupakan akomodasi rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh. Bagi Anda yang menginginkan kualitas pe', 8, 'tirta.jpg', '2022-11-27 10:30:29', '2022-11-27 10:30:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pemesanans`
--

CREATE TABLE `pemesanans` (
  `id` int(11) NOT NULL,
  `kode_pemesanan` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `kamar` int(11) DEFAULT NULL,
  `hari` int(11) DEFAULT NULL,
  `orang` int(11) DEFAULT NULL,
  `checkin` date DEFAULT NULL,
  `total_bayar` decimal(10,0) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemesanans`
--

INSERT INTO `pemesanans` (`id`, `kode_pemesanan`, `id_user`, `id_hotel`, `kamar`, `hari`, `orang`, `checkin`, `total_bayar`, `status`, `createdAt`, `updatedAt`) VALUES
(10, 'xGHm48JtGw', 1, 2, 1, 2, 3, '2022-12-07', '12599994', 'belum di bayar', '2022-12-02 03:13:09', '2022-12-02 03:13:09'),
(11, '154IGIan2l', 1, 1, 1, 1, 4, '2022-12-23', '2000000', 'belum di bayar', '2022-12-02 14:41:31', '2022-12-02 14:41:31'),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-02 15:10:03', '2022-12-02 15:10:03'),
(13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-02 15:11:07', '2022-12-02 15:11:07'),
(14, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-02 15:13:32', '2022-12-02 15:13:32'),
(15, 'xGHm48JtGr', 1, 2, 1, 2, 3, '2022-12-09', '12599994', 'belum di bayar', '2022-12-02 15:13:46', '2022-12-02 15:13:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `no_ktp` int(11) DEFAULT NULL,
  `nama_depan` varchar(255) DEFAULT NULL,
  `nama_belakang` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `jenis_kelamin` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `poto` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `no_ktp`, `nama_depan`, `nama_belakang`, `email`, `jenis_kelamin`, `password`, `poto`, `createdAt`, `updatedAt`, `id_user`) VALUES
(1, 2147483647, 'Rifaz', 'Muhammad', 'Rifaz@gmail.com', 'Laki-Laki', '$2b$10$LUoxyYY3bDhsNzG1jli8WearJnoTdczVlnyk1cQ5P8B8T1IzKbCZy', 'rifaz.jpg', '2022-11-26 02:10:34', '2022-11-26 02:10:34', NULL),
(2, 121212, 'Lee', 'hyun', 'Rifaz@gmail.com', 'Laki-Laki', '$2b$10$o8DBYJnNKT8a4VEg2uiWZe43uGj72rNcwwGKlMVZhf.01TgL/F7H2', 'rifaz.jpg', '2022-11-26 02:18:35', '2022-11-26 02:24:13', NULL),
(9, 23232323, 'Saepurizal', 'Rizal', 'Saepurizal16@gmail.com', 'Laki - Laki', 'Rizal123', '', '2022-11-29 09:01:39', '2022-11-29 09:01:39', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_hotel` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_2` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_3` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_4` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_5` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_6` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_7` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_8` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_9` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_10` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_11` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_12` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_13` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_14` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_15` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_16` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_17` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_18` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_19` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_20` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_21` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_22` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_23` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_24` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_25` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_26` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_27` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_28` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_29` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_30` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_31` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_32` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_33` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_34` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_35` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_36` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_37` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_38` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_39` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_40` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_41` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_42` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_43` (`kode_hotel`),
  ADD UNIQUE KEY `kode_hotel_44` (`kode_hotel`),
  ADD KEY `id_hotel` (`id_hotel`);

--
-- Indexes for table `pemesanans`
--
ALTER TABLE `pemesanans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_hotel` (`id_hotel`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `no_ktp` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_2` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_3` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_4` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_5` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_6` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_7` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_8` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_9` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_10` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_11` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_12` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_13` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_14` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_15` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_16` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_17` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_18` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_19` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_20` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_21` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_22` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_23` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_24` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_25` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_26` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_27` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_28` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_29` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_30` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_31` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_32` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_33` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_34` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_35` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_36` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_37` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_38` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_39` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_40` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_41` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_42` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_43` (`no_ktp`),
  ADD UNIQUE KEY `no_ktp_44` (`no_ktp`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pemesanans`
--
ALTER TABLE `pemesanans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `Hotels_id_hotel_foreign_idx` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_10` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_11` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_12` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_13` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_14` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_15` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_16` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_17` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_18` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_19` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_2` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_20` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_21` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_22` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_23` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_24` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_25` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_26` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_27` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_28` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_29` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_3` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_30` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_31` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_32` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_33` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_34` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_35` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_36` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_37` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_38` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_39` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_4` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_40` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_41` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_42` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_5` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_6` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_7` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_8` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_ibfk_9` FOREIGN KEY (`id_hotel`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `pemesanans`
--
ALTER TABLE `pemesanans`
  ADD CONSTRAINT `pemesanans_ibfk_1` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_10` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_11` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_12` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_13` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_14` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_15` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_16` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_17` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_18` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_19` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_2` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_20` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_21` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_22` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_23` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_24` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_25` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_26` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_27` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_28` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_29` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_3` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_30` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_31` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_32` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_33` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_34` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_35` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_36` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_37` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_38` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_39` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_4` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_40` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_41` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_42` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_43` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_44` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_45` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_46` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_47` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_48` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_49` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_5` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_50` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_51` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_52` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_53` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_54` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_55` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_56` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_6` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_7` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_8` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanans_ibfk_9` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `Users_id_user_foreign_idx` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_10` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_11` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_12` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_5` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_6` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_7` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_8` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_9` FOREIGN KEY (`id_user`) REFERENCES `pemesanans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
