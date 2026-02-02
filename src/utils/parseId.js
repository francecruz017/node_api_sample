export const parseId = (value) => {
    const id = Number(value);
    return Number.isNaN(id) ? null : id;
}