export const generate_image_url = (image_id: string, form: string="720p") => {
    const url = `https://images.igdb.com/igdb/image/upload/t_${form}/${image_id}.jpg`
    return url
}
