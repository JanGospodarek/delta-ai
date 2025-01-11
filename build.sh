npm run build
LC_ALL=C find "./out" -type f -exec sed -i '' 's/\/_next/\/next/g' {} +
