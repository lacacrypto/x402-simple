export default function handler(req, res) {
  const payTo = process.env.PAY_TO;

  if (!payTo) {
    return res.status(500).json({ error: "PAY_TO chưa được thiết lập" });
  }

  res.setHeader('x402-payment-required', JSON.stringify({
    accepts: [{
      scheme: "exact",
      price: "$0.1",
      network: "eip155:8453",
      payTo: payTo,
      description: "Mở khóa nội dung premium"
    }]
  }));

  return res.status(402).json({ message: "Payment Required" });
}
