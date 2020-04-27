using Piranha.Extend;
using Piranha.Extend.Fields;

namespace PiranhaCMS3.Blocks
{
    [BlockType(Name = "Code", Category = "Content",
        Icon = "fas fa-code", Component = "code-block")]
    public class CodeBlock : Block
    {
        /// <summary>
        /// Gets/sets the text body.
        /// </summary>
        public TextField Body { get; set; }

        public StringField Language { get; set; }
    }
}