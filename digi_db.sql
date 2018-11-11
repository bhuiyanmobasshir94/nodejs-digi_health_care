-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2018 at 11:43 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `ad_id` int(20) NOT NULL,
  `dr_name` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `ad_created` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`ad_id`, `dr_name`, `speciality`, `address`, `ad_created`, `status`) VALUES
(1, 'Dr. mahfuzur Rahman', 'MBBS, FCPS(1st Part), Nerologist', 'Dr. Shahabuddin Medial College', '2018-01-04 05:00:00.000000', 'Approved'),
(2, 'Dr. Motaleb', 'Cardiologist', 'DMC', '2018-01-04 14:28:12.662000', 'Disapproved'),
(3, 'Dr. Imran', 'Cardio', 'saddashdg', '2018-01-04 16:37:12.377000', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `mszId` int(255) NOT NULL,
  `sender_uname` varchar(255) DEFAULT NULL,
  `reciever_uname` varchar(255) DEFAULT NULL,
  `msz_body` text,
  `created_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`mszId`, `sender_uname`, `reciever_uname`, `msz_body`, `created_at`) VALUES
(2, 'Bhuiyan Mobasshir', 'Amite Kumar', 'dandbansdbnmasd', '2018-01-04 08:08:41.059000'),
(3, 'Bhuiyan Mobasshir', 'Riaz Hossain', 'sdasd', '2018-01-04 08:11:51.789000'),
(5, 'Bhuiyan Mobasshir', 'Amite Baral', 'Hi mota Ajax Kaj hoise ', '2018-01-04 09:46:51.696000'),
(6, 'Amite Baral', 'Bhuiyan Mobasshir', 'amite is checking about bhuiyan mobasshir ', '2018-01-04 09:50:42.293000'),
(7, 'Bhuiyan Mobasshir', 'Amite Baral', 'Heloo check from here!!!', '2018-01-04 12:17:45.944000'),
(8, 'Bhuiyan Mobasshir', 'Amite Baral', 'Hey Mota!!!!', '2018-01-04 16:31:46.614000'),
(9, 'Bhuiyan Mobasshir', 'Amite Baral', 'check!!!', '2018-01-04 16:36:32.934000'),
(10, 'Amite Baral', 'Bhuiyan Mobasshir', 'asdasd', '2018-01-04 16:40:23.547000');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `commented_post_id` int(11) NOT NULL,
  `commented_user_id` int(11) NOT NULL,
  `commented_username` varchar(30) NOT NULL,
  `comment_body` text NOT NULL,
  `comment_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `commented_post_id`, `commented_user_id`, `commented_username`, `comment_body`, `comment_created`) VALUES
(1, 7, 1, 'Bhuiyan Mobasshir', 'Commented!!!!', '2017-11-26 03:53:15'),
(2, 7, 5, 'Kamrul Huda', 'Commented from Sixth One!!!', '2017-11-26 04:04:57'),
(3, 7, 1, 'Bhuiyan Mobasshir', 'Hello from Sixth Onee!!!!', '2017-11-26 04:07:17'),
(4, 6, 1, 'Bhuiyan Mobasshir', 'Hi from Fifth Hitted!!!', '2017-11-26 04:08:12'),
(5, 6, 5, 'Kamrul Huda', 'hi ()', '2017-11-26 04:09:04'),
(6, 9, 7, 'Imran', 'hi!!!', '2017-11-26 14:10:16'),
(7, 10, 5, 'Kamrul Huda', 'Hi I am kamrul Huda Tamim', '2017-11-27 20:42:46'),
(8, 11, 5, 'Kamrul Huda', 'Hi Commented simultaneously !!!', '2017-11-27 21:42:44'),
(9, 3, 4, 'Riaz Hoassain', 'Hi I am Mobasshir Bhuiyan Here !!!!', '2017-11-27 22:38:45'),
(10, 12, 1, 'Bhuiyan Mobasshir', 'My Comments!!!!', '2017-11-27 22:47:52'),
(11, 13, 4, 'Riaz Hoassain', 'Hi I am Riaz hossain here by !!!', '2017-11-28 23:53:28'),
(12, 13, 1, 'Bhuiyan Mobasshir', 'This is me from Node.js', '2018-01-04 01:27:33'),
(13, 13, 1, 'Bhuiyan Mobasshir', 'I am again', '2018-01-04 01:28:17'),
(14, 14, 1, 'Bhuiyan Mobasshir', 'hi from mobasshir', '2018-01-04 01:31:29'),
(15, 14, 1, 'Bhuiyan Mobasshir', 'hi again', '2018-01-04 01:31:48'),
(16, 14, 1, 'Bhuiyan Mobasshir', 'hi third time \r\n', '2018-01-04 01:44:25'),
(17, 15, 3, 'Amite Baral', 'it\'s ok there\r\n', '2018-01-04 04:28:04');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `posted_user_type` varchar(30) NOT NULL,
  `posted_user_id` int(11) NOT NULL,
  `posted_username` varchar(30) NOT NULL,
  `post_body` text NOT NULL,
  `post_like` int(20) DEFAULT NULL,
  `post_dislike` int(20) DEFAULT NULL,
  `post_created` datetime NOT NULL,
  `post_moderator_id` int(11) DEFAULT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `posted_user_type`, `posted_user_id`, `posted_username`, `post_body`, `post_like`, `post_dislike`, `post_created`, `post_moderator_id`, `status`) VALUES
(9, 'User', 7, 'Imran', 'HI From Class!!', NULL, NULL, '2017-11-26 14:08:27', NULL, 'Approved'),
(10, 'User', 5, 'Kamrul Huda', 'Hi from last post!!!!', NULL, NULL, '2017-11-27 20:40:31', NULL, 'Approved'),
(11, 'User', 5, 'Kamrul Huda', 'After Session (*_*) @@@', NULL, NULL, '2017-11-27 21:28:14', NULL, 'Approved'),
(13, 'Moderator', 4, 'Riaz Hoassain', 'Hi This is the latest post from moderator!!!!!', NULL, NULL, '2017-11-28 23:52:48', NULL, 'Disapproved'),
(17, 'Admin', 1, 'Bhuiyan Mobasshir', 'hi this is third time updated!!!', 0, 0, '2018-01-04 06:07:50', 0, 'Approved'),
(18, 'Admin', 1, 'Bhuiyan Mobasshir', 'Hey Mota!!!', 0, 0, '2018-01-04 16:33:36', 0, 'Disapproved');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `user_type` varchar(30) NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `signupdate` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `user_type`, `image`, `status`, `signupdate`) VALUES
(1, 'Bhuiyan Mobasshir', 'MSbhuiyan143', 'mobasshir@dhc.com', 'Admin', 'me.jpg', 'Approved', NULL),
(2, 'Peu Roy', 'roy1234', 'peu@dhc.com', 'Moderator', NULL, 'Approved', NULL),
(3, 'Amite Baral', 'kumar1234', 'amite@dhc.com', 'Moderator', 'images.png', 'Approved', NULL),
(4, 'Riaz Hoassain', 'riaz1234', 'riaz@gmail.com', 'Moderator', NULL, 'Approved', NULL),
(5, 'Kamrul Huda', 'huda1234', 'huda@gmail.com', 'User', NULL, 'Approved', NULL),
(6, 'Roy Peu', 'peu1234', 'peu@gmail.com', 'User', NULL, 'Approved', NULL),
(7, 'Imran', 'imran1234', 'imran@gmail.com', 'Moderator', NULL, 'Approved', NULL),
(8, 'Berry Phillip', 'berry1234', 'berry@yahoo.com', 'Admin', NULL, 'Approved', '03/01/2018'),
(12, 'Rishpita Das', 'rishpita1234', 'rishpita@dhc.com', 'User', NULL, 'Approved', '03/01/2018');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`ad_id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`mszId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `ad_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `mszId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
