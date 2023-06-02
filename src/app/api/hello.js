// app/api/hello.js
export default function handler(req, res) {
  // req.method ile isteğin HTTP metodu kontrol ediliyor
  if (req.method === 'GET') {
    // GET isteği ise res.status ile durum kodu belirleniyor
    // res.json ile JSON formatında cevap veriliyor
    res.status(200).json({ message: 'Hello' })
  } else {
    // Başka bir metod ise hata mesajı veriliyor
    res.status(405).json({ message: 'Method not allowed' })
  }
}
