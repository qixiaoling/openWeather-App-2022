function createTimeString(timeStamp) {
    const time = new Date(timeStamp * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'} );
}
export default createTimeString;