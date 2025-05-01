export class NumberUtils {
    formatNumber(balance: string): string {
        return parseInt(balance).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}