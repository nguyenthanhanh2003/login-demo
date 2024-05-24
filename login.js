function search() {
    // Lấy giá trị từ ô input
    var searchTerm = document.getElementById("search").value;

    // Tạo một phần tử div mới
    var resultsDiv = document.createElement("div");

    // Thêm nội dung vào phần tử div mới
    resultsDiv.innerHTML = "<p>Kết quả tìm kiếm cho: " + searchTerm + "</p>";

    // Thêm phần tử div mới vào thẻ HTML
    document.getElementById("search-results").appendChild(resultsDiv);
  }