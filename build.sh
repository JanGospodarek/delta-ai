npm run build
mv ./out/_next ./out/next
 find ./out -name '*.html' -exec sed -i '' 's/_next/next/g' {} +