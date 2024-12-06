// Default markdown content for testing, ensuring it covers all required elements
const defaultMarkdown = `
# Heading 1
## Subheading 2
[Link Example](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold Text**
`;

// Initialize editor with default markdown
document.getElementById('editor').value = defaultMarkdown;
updatePreview(); // Initialize preview

// Function to update the preview in real-time
function updatePreview() {
    const editorText = document.getElementById('editor').value;
    const htmlContent = marked(editorText); // Convert markdown to HTML using marked.js
    document.getElementById('preview').innerHTML = htmlContent;
}
