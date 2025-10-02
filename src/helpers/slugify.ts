export default function slugify(string: string = "") {
  return string.toLowerCase().trim().replace(/( )/g, "-").replace(/(,|#)/g, "");
}
