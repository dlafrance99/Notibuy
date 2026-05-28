export const formatDateMMDDYY = ({
    dateInput,
    railWayTime = false,
    includeTime = false
}) => {
    if (!(dateInput instanceof Date) || isNaN(dateInput.getTime())) {
        return 'N/A';
    }

    const month = String(dateInput.getMonth() + 1).padStart(2, '0');
    const day = String(dateInput.getDate()).padStart(2, '0');
    const year = String(dateInput.getFullYear()).slice(-2);

    if (!includeTime) {
        return `${month}.${day}.${year}`;
    }

    const minute = String(dateInput.getMinutes()).padStart(2, '0');

    let hour = dateInput.getHours();
    let suffix = '';

    if (railWayTime) {
        hour = String(hour).padStart(2, '0');
    } else {
        suffix = hour >= 12 ? ' PM' : ' AM';

        hour = hour % 12;

        if (hour === 0) {
            hour = 12;
        }

        hour = String(hour).padStart(2, '0');
    }

    return `${month}.${day}.${year} ${hour}:${minute}${suffix}`;
};

export const getLowestPrice = (PriceHistory) => {
    if (!PriceHistory || PriceHistory.length === 0) {
        return null;
    }

    return PriceHistory.reduce((lowest, current) => {
        return current.Price < lowest.Price ? current : lowest;
    });
};

export const getHighestPrice = (PriceHistory) => {
    if (!PriceHistory || PriceHistory.length === 0) {
        return null;
    }

    return PriceHistory.reduce((lowest, current) => {
        return current.Price > lowest.Price ? current : lowest;
    });
};

export const getRecentPrice = (PriceHistory) => {
    if (!PriceHistory || PriceHistory.length === 0) {
        return null;
    }

    return PriceHistory.reduce((lowest, current) => {
        return current.Dttm > lowest.Dttm ? current : lowest;
    });
};