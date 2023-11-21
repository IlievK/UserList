export function formatIsoDate(isoDate) {
    const option = { year: 'numeric', month: 'long', day: 'numeric' }

    return new Date(isoDate).toLocaleDateString(undefined, option)
}