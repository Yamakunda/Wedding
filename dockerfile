# Stage 1: Build the Next.js static export
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Run Next.js build (Next.js automatically exports to 'out' directory
# when 'output: "export"' is set in next.config.js)
RUN yarn build 

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine

# Đặt thư mục làm việc vào nơi Nginx phục vụ tệp (tùy chọn)
WORKDIR /usr/share/nginx/html 

# Sao chép các tệp tĩnh đã được build từ stage 'builder'
COPY --from=builder /app/out . 

# SAO CHÉP cấu hình server tùy chỉnh vào thư mục cấu hình Nginx.
# Tệp này CHỈ chứa khối 'server'.
COPY nginx.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80