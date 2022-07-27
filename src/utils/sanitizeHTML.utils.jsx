import sanitizeHtml from 'sanitize-html';

const RenderHTML = ({ html = '' }) => {
  const sanitized = sanitizeHtml(html);
  return <p dangerouslySetInnerHTML={{ __html: sanitized }} />;
};

export default RenderHTML;
