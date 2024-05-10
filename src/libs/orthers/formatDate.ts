
// FORMAT LẠI DATE KHI RENDER CREATED AT TỪ NOTIFICATIONS 
function formatDate(dateString: string) {
    // Tạo một đối tượng Date từ chuỗi thời gian
    const date = new Date(dateString);

    // Lấy giờ và phút
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Định dạng giờ theo chuẩn 12 giờ và AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Chuyển đổi giờ sang định dạng 12 giờ
    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    // Lấy ngày, tháng và năm
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const year = date.getFullYear();

    // Định dạng ngày tháng năm
    const formattedDate = `${day}/${month < 10 ? '0' : ''}${month}/${year}`;

    // Kết hợp giờ và ngày tháng năm
    return `${formattedTime} ${formattedDate}`;
}
// ĐỊNH DẠNG DATE ĐỂ LƯU LÊN CƠ SỞ DỮ LIỆU
function formatISODate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Thêm '0' phía trước nếu cần
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
}
export {formatDate , formatISODate};