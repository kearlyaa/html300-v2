export default {
    computed: {
        toggleBorder() {
            this.hasBorder = !this.hasBorder;
            if (this.hasBorder) {
                console.log("testing")
            }
        }
    }
}