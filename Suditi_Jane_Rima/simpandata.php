<?php
include 'koneksi.php'; // Memanggil file koneksi

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];

    // Menggunakan parameterized query untuk mencegah SQL injection
    $sql = $conn->prepare("INSERT INTO janeyaki (nama, email) VALUES (?, ?)");
    $sql->bind_param("ss", $nama, $email);

    if ($sql->execute()) {
        echo "Data berhasil disimpan";
    } else {
        echo "Error: " . $sql->error;
    }

    $sql->close();
}

$conn->close();
?>
<?php
include 'koneksi.php'; // Memanggil file koneksi

// Mengambil data dari tabel janeyaki
$sql = "SELECT * FROM janeyaki";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();
?>
