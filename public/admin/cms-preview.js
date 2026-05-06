var PostPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || '';
    var description = entry.getIn(['data', 'description']) || '';
    var category = entry.getIn(['data', 'category']) || '';
    var date = entry.getIn(['data', 'date']) || '';
    var coverImage = entry.getIn(['data', 'coverImage']);
    var coverSrc = coverImage ? this.props.getAsset(coverImage) : null;
    var draft = entry.getIn(['data', 'draft']);
    var body = this.props.widgetFor('body');

    return h(
      'div',
      { className: 'preview-root' },
      draft ? h('div', { className: 'draft-badge' }, '⚠ Rascunho') : null,
      h(
        'header',
        { className: 'article-header' },
        h('p', { className: 'article-kicker' }, category),
        h('h1', {}, title),
        h('p', { className: 'article-lede' }, description),
        h('div', { className: 'article-meta' }, h('span', {}, date))
      ),
      coverSrc
        ? h('img', { className: 'cover-img', src: String(coverSrc), alt: '' })
        : null,
      h('div', { className: 'article-body' }, body)
    );
  },
});

CMS.registerPreviewTemplate('pt-articles', PostPreview);
CMS.registerPreviewTemplate('en-articles', PostPreview);
CMS.registerPreviewStyle('/admin/preview.css');
