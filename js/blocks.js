(function(blocks, editor, element) {

  var el = element.createElement;
  var RichText = editor.RichText;
  var AlignmentToolbar = editor.AlignmentToolbar;
  var BlockControls = editor.BlockControls;
  var MediaUpload = editor.MediaUpload;

  blocks.registerBlockType('shapes/hero', {
    title: 'Page Hero',
    icon: 'id',
    category: 'layout',

    attributes: {
      title: {
        type: 'array',
        source: 'children',
        selector: 'h1',
      },
      lead: {
        type: 'array',
        source: 'children',
        selector: 'p',
      },
      alignment: {
        type: 'string',
        default: 'none',
      },
      imgUrl: {
        type: 'string',
        default: '',
      },
    },

    edit : function(props) {
      const className = blocks.getBlockDefaultClassName('shapes/hero');
      const { title, lead, alignment, imgUrl } = props.attributes;

      function onChangeTitle (newTitle) {
        props.setAttributes({title: newTitle});
      }
      function onChangeLead (newLead) {
        props.setAttributes({lead: newLead});
      }
      function onChangeAlignment(newAlignment) {
        props.setAttributes({alignment: newAlignment === undefined ? 'none' : newAlignment });
      }
      function onSelectImage(value) {
        props.setAttributes({imgUrl: value.sizes.full.url });
      }
      function renderUploadedMedia(args) {
        return el('button', { onClick: args.open }, "Open Media Library");
      }

      return [
        <BlockControls key="controls">
          <AlignmentToolbar
            value={alignment}
            onChange={onChangeAlignment}
          />
        </BlockControls>,
        <section
          className={className}
          style={{
            textAlign: alignment
          }}
          >
          <MediaUpload
	    render={renderUploadedMedia}
	    onSelect={onSelectImage}
          />
          <RichText
	    tagName="h1"
	    placeholder="Hero Title"
	    value={title}
	    onChange={onChangeTitle}
          />
          <RichText
            tagName="p"
            placeholder="Enter lead copy here"
            onChange={onChangeLead}
            value={lead}
          />
        </section>
      ];
    },

    save: function(props) {
      const { title, lead, alignment, imgUrl } = props.attributes;
      const sectionClassName = 'shapes-hero-align-' + alignment;
      const sectionStyle = {
          background: 'no-repeat url(' + imgUrl + ')',
      };
      return (
        <section
          className={sectionClassName}
          style={sectionStyle}
          >
          <RichText.Content
            tagName="h1"
            value={title}
            />
          <RichText.Content
            tagName="p"
            value={lead}
            />
        </section>
      );
    },
  });
}(
  window.wp.blocks,
  window.wp.editor,
  window.wp.element
));
