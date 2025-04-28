import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Import the professional icon

const tradeData = [
  { id: "#28752", pair: "XAUUSD", investment: 1000, currentBalance: 1063, profit: 63, drawdown: 5, time: "2 mins ago" },
  { id: "#28751", pair: "BTCUSD", investment: 2000, currentBalance: 2032, profit: 32, drawdown: 3, time: "15 mins ago" },
  { id: "#28750", pair: "ETHUSD", investment: 1500, currentBalance: 1435, profit: -64, drawdown: 7, time: "32 mins ago" },
  { id: "#28749", pair: "XAUUSD", investment: 1000, currentBalance: 1082, profit: 82, drawdown: 2, time: "1 hour ago" },
  { id: "#28748", pair: "BTCUSD", investment: 3000, currentBalance: 3090, profit: 90, drawdown: 4, time: "2 hours ago" },
  { id: "#28747", pair: "ETHUSD", investment: 2500, currentBalance: 2450, profit: -50, drawdown: 6, time: "3 hours ago" },
  { id: "#28746", pair: "XAUUSD", investment: 1200, currentBalance: 1212, profit: 12, drawdown: 1, time: "4 hours ago" },
  { id: "#28745", pair: "BTCUSD", investment: 5000, currentBalance: 5250, profit: 250, drawdown: 5, time: "5 hours ago" },
  { id: "#28744", pair: "ETHUSD", investment: 1800, currentBalance: 1750, profit: -50, drawdown: 3, time: "6 hours ago" },
  { id: "#28743", pair: "XAUUSD", investment: 1000, currentBalance: 1020, profit: 20, drawdown: 2, time: "7 hours ago" },
  { id: "#28742", pair: "BTCUSD", investment: 4000, currentBalance: 4100, profit: 100, drawdown: 2, time: "8 hours ago" },
  { id: "#28741", pair: "ETHUSD", investment: 2200, currentBalance: 2150, profit: -50, drawdown: 3, time: "9 hours ago" },
  { id: "#28740", pair: "XAUUSD", investment: 1500, currentBalance: 1530, profit: 30, drawdown: 1.5, time: "10 hours ago" },
  { id: "#28739", pair: "BTCUSD", investment: 6000, currentBalance: 6150, profit: 150, drawdown: 3, time: "11 hours ago" },
  { id: "#28738", pair: "ETHUSD", investment: 3000, currentBalance: 2950, profit: -50, drawdown: 1.7, time: "12 hours ago" },
  { id: "#28737", pair: "XAUUSD", investment: 2000, currentBalance: 2040, profit: 40, drawdown: 2, time: "13 hours ago" },
];

const TradeHistory = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1f24", minHeight: '100vh', py: 4 }}>
      <Container>
        <Typography variant="h4" sx={{ color: "#f0b90b", display: 'flex', alignItems: 'center', mb: 2, fontWeight: 600 }}>  
          <TrendingUpIcon sx={{ color: "#facc15", marginRight: 1 }} /> {/* Added the professional icon */}
          Live Trading Feed
        </Typography>

        <TableContainer component={Paper} sx={{ backgroundColor: "#2b2c30" }}>
          <Table>
            <TableHead>
              <TableRow>
                {['Trader ID', 'Pair', 'Investment Balance', 'Current Balance', 'Profit', 'Drawdown', '1% Fixed (Daily)'].map((header) => (
                  <TableCell key={header} sx={{ color: "#aaa", borderBottom: "1px solid #444" }}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tradeData.map((trade) => (
                <TableRow key={trade.id} hover>
                  <TableCell sx={{ color: "#fff" }}>{trade.id}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{trade.pair}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>${Math.round(trade.investment)}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>${Math.round(trade.currentBalance)}</TableCell>
                  <TableCell sx={{ color: trade.profit >= 0 ? "#4ade80" : "#f87171", fontWeight: 600 }}>
                    {trade.profit >= 0 ? `+$${Math.round(trade.profit)}` : `-$${Math.abs(Math.round(trade.profit))}`}
                  </TableCell>
                  <TableCell sx={{ color: "#facc15" }}>{Math.round(trade.drawdown)}%</TableCell>
                  <TableCell sx={{ color: "#4ade80", fontWeight: 600 }}>
                    +${Math.round(trade.currentBalance * 0.01)} {/* 1% Fixed Daily */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default TradeHistory;