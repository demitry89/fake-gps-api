export default function handler(req, res) {
  console.log('API handler dipanggil');
  res.status(200).json({
    lat: -6.24180158483006,
    lon: 106.87688156962395
  });
}
