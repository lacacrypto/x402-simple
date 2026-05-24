export default function handler(req, res) {
  const payTo = process.env.PAY_TO || '';

  res.setHeader('x402-payment-required', JSON.stringify({
    accepts: [{
      scheme: "exact",
      price: "$0.1",
      network: "eip155:8453",
      payTo: payTo,
      description: "Unlock premium content"
    }]
  }));

  return res.status(402).json({ message: "Payment Required" });
}
