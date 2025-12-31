#!/bin/bash
# 启动本地Web服务器

cd "$(dirname "$0")"
echo "🚀 启动本地服务器..."
echo "📡 本机访问: http://localhost:8000"

# 获取本机IP地址（macOS）
IP=$(ipconfig getifaddr en0 2>/dev/null || ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

if [ -n "$IP" ]; then
    echo "🌐 局域网访问: http://$IP:8000"
else
    echo "⚠️  无法获取IP地址，请手动查看：ifconfig | grep 'inet '"
fi

echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# 启动Python服务器
python3 -m http.server 8000 --bind 0.0.0.0

