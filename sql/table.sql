-- DATABASE BEGIN
CREATE DATABASE dvd_library;
-- DATABASE END

-- TABLE BEGIN
CREATE TABLE friend (
    friend_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100),
    phone_number VARCHAR(20)
);

CREATE TABLE dvd (
    dvd_id VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    actor_name VARCHAR(100)
);

CREATE TABLE loan (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    friend_id INT,
    dvd_id VARCHAR(13),
    loan_date DATE,
    return_date DATE,
    FOREIGN KEY (friend_id) REFERENCES friend(friend_id),
    FOREIGN KEY (dvd_id) REFERENCES dvd(dvd_id)
);
-- TABLE END

-- INSERT DATA BEGIN
INSERT INTO friend (friend_id, name, address, email, phone_number) VALUES
(1, 'Andi', 'Jl. Merdeka No. 10', 'andi@gmail.com', '081234567890'),
(2, 'Budi', 'Jl. Kemerdekaan No. 20', 'budi@gmail.com', '081234567891'),
(3, 'Citra', 'Jl. Pancasila No. 30', 'citra@gmail.com', '081234567892'),
(4, 'Dina', 'Jl. Proklamasi No. 40', 'dina@gmail.com', '081234567893'),
(5, 'Eko', 'Jl. Sudirman No. 50', 'eko@gmail.com', '081234567894');

INSERT INTO dvd (dvd_id, title, actor_name) VALUES
('DVD2024000001', 'Die Another Day', 'Pierce Brosnan'),
('DVD2024000002', 'Inception', 'Leonardo DiCaprio'),
('DVD2024000003', 'Interstellar', 'Matthew McConaughey'),
('DVD2024000004', 'The Matrix', 'Keanu Reeves'),
('DVD2024000005', 'Avatar', 'Sam Worthington');

INSERT INTO loan (loan_id, friend_id, dvd_id, loan_date, return_date) VALUES
(1, 1, 'DVD2024000002', '2024-01-01', '2024-01-07'),
(2, 2, 'DVD2024000001', '2024-01-05', '2024-01-12'),
(3, 3, 'DVD2024000003', '2024-01-10', '2024-01-17'),
(4, 4, 'DVD2024000004', '2024-02-01', '2024-02-08'),
(5, 5, 'DVD2024000005', '2024-02-03', '2024-02-10'),
(6, 5, 'DVD2024000004', '2024-03-03', '2024-03-10'),
(7, 5, 'DVD2024000003', '2024-04-03', '2024-05-11');
-- INSERT DATA END

-- SELECT DATA BEGIN
SELECT 
    dvd.title, 
    friend.name
FROM loan
INNER JOIN dvd ON loan.dvd_id = dvd.dvd_id
INNER JOIN friend ON loan.friend_id = friend.friend_id
WHERE MONTH(loan.loan_date) = 1;

SELECT 
    friend.name, 
    COUNT(loan.friend_id) AS loan_amount
FROM loan
INNER JOIN friend ON loan.friend_id = friend.friend_id
GROUP BY loan.friend_id
ORDER BY loan_amount DESC;

SELECT 
    MAX(loan.loan_date) as last_borrowed
FROM loan
JOIN dvd ON loan.dvd_id = dvd.dvd_id
WHERE dvd.title = 'Die Another Day';

-- SELECT DATA END

