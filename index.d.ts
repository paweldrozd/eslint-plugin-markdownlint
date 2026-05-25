import type { Linter, Rule } from "eslint";

// ─── Rule option interfaces ───────────────────────────────────────────────────

export interface MD001Options {
  /** RegExp for matching title in front matter. Default: `"^\\s*title\\s*[:=]"` */
  front_matter_title?: string;
}

export interface MD003Options {
  /** Heading style. Default: `"consistent"` */
  style?:
    | "consistent"
    | "atx"
    | "atx_closed"
    | "setext"
    | "setext_with_atx"
    | "setext_with_atx_closed";
}

export interface MD004Options {
  /** Unordered list style. Default: `"consistent"` */
  style?: "consistent" | "asterisk" | "plus" | "dash" | "sublist";
}

// MD005 – no configurable options

export interface MD007Options {
  /** Spaces for indent. Default: `2` */
  indent?: number;
  /** Whether to indent the first level of the list. Default: `false` */
  start_indented?: boolean;
  /** Spaces for first level indent (when start_indented is set). Default: `2` */
  start_indent?: number;
}

export interface MD009Options {
  /** Spaces for line break. Default: `2` */
  br_spaces?: number;
  /** Include code blocks. Default: `false` */
  code_blocks?: boolean;
  /** Allow spaces for empty lines in list items. Default: `false` */
  list_item_empty_lines?: boolean;
  /** Include unnecessary breaks. Default: `false` */
  strict?: boolean;
}

export interface MD010Options {
  /** Include code blocks. Default: `true` */
  code_blocks?: boolean;
  /** Fenced code languages to ignore. Default: `[]` */
  ignore_code_languages?: string[];
  /** Number of spaces for each hard tab. Default: `1` */
  spaces_per_tab?: number;
}

// MD011 – no configurable options

export interface MD012Options {
  /** Consecutive blank lines. Default: `1` */
  maximum?: number;
}

export interface MD013Options {
  /** Number of characters. Default: `80` */
  line_length?: number;
  /** Number of characters for headings. Default: `80` */
  heading_line_length?: number;
  /** Number of characters for code blocks. Default: `80` */
  code_block_line_length?: number;
  /** Include code blocks. Default: `true` */
  code_blocks?: boolean;
  /** Include tables. Default: `true` */
  tables?: boolean;
  /** Include headings. Default: `true` */
  headings?: boolean;
  /** Strict length checking. Default: `false` */
  strict?: boolean;
  /** Stern length checking. Default: `false` */
  stern?: boolean;
}

// MD014 – no configurable options

// MD018 – no configurable options

// MD019 – no configurable options

// MD020 – no configurable options

// MD021 – no configurable options

export interface MD022Options {
  /** Blank lines above heading. Default: `1` */
  lines_above?: number | number[];
  /** Blank lines below heading. Default: `1` */
  lines_below?: number | number[];
}

// MD023 – no configurable options

export interface MD024Options {
  /** Only check sibling headings. Default: `false` */
  siblings_only?: boolean;
}

export interface MD025Options {
  /** Heading level. Default: `1` */
  level?: number;
  /** RegExp for matching title in front matter. Default: `"^\\s*title\\s*[:=]"` */
  front_matter_title?: string;
}

export interface MD026Options {
  /** Punctuation characters. Default: `".,;:!。，；：！"` */
  punctuation?: string;
}

export interface MD027Options {
  /** Allow multiple spaces in list items. Default: `false` */
  list_items?: boolean;
}

// MD028 – no configurable options

export interface MD029Options {
  /** List style. Default: `"one_or_ordered"` */
  style?: "one" | "ordered" | "zero" | "one_or_ordered";
}

export interface MD030Options {
  /** Spaces for single-line unordered list items. Default: `1` */
  ul_single?: number;
  /** Spaces for single-line ordered list items. Default: `1` */
  ol_single?: number;
  /** Spaces for multi-line unordered list items. Default: `1` */
  ul_multi?: number;
  /** Spaces for multi-line ordered list items. Default: `1` */
  ol_multi?: number;
}

export interface MD031Options {
  /** Include list items. Default: `true` */
  list_items?: boolean;
}

// MD032 – no configurable options

export interface MD033Options {
  /** Allowed elements. Default: `[]` */
  allowed_elements?: string[];
}

// MD034 – no configurable options

export interface MD035Options {
  /** Horizontal rule style. Default: `"consistent"` */
  style?: "consistent" | string;
}

export interface MD036Options {
  /** Punctuation characters. Default: `".,;:!?。，；：！？"` */
  punctuation?: string;
}

// MD037 – no configurable options

// MD038 – no configurable options

// MD039 – no configurable options

export interface MD040Options {
  /** List of languages to allow. Default: `[]` */
  allowed_languages?: string[];
  /** Require language specification. Default: `false` */
  language_only?: boolean;
}

export interface MD041Options {
  /** Heading level. Default: `1` */
  level?: number;
  /** RegExp for matching title in front matter. Default: `"^\\s*title\\s*[:=]"` */
  front_matter_title?: string;
}

// MD042 – no configurable options

export interface MD043Options {
  /** List of required headings. Default: `[]` */
  headings?: string[];
  /** Allow optional headings. Default: `false` */
  match_case?: boolean;
}

export interface MD044Options {
  /** List of proper names. Default: `[]` */
  names?: string[];
  /** Include code blocks. Default: `true` */
  code_blocks?: boolean;
  /** Include HTML elements. Default: `true` */
  html_elements?: boolean;
}

// MD045 – no configurable options

export interface MD046Options {
  /** Code block style. Default: `"consistent"` */
  style?: "consistent" | "fenced" | "indented";
}

// MD047 – no configurable options

export interface MD048Options {
  /** Code fence style. Default: `"consistent"` */
  style?: "consistent" | "backtick" | "tilde";
}

export interface MD049Options {
  /** Emphasis style. Default: `"consistent"` */
  style?: "consistent" | "asterisk" | "underscore";
}

export interface MD050Options {
  /** Strong style. Default: `"consistent"` */
  style?: "consistent" | "asterisk" | "underscore";
}

export interface MD051Options {
  /** Ignore case of fragments. Default: `false` */
  ignore_case?: boolean;
  /** Pattern for ignoring additional fragments. Default: `""` */
  ignored_pattern?: string;
}

export interface MD052Options {
  /** Ignored link labels. Default: `["x"]` */
  ignored_labels?: string[];
  /** Allow shortcut reference syntax. Default: `false` */
  shortcut_syntax?: boolean;
}

export interface MD053Options {
  /** Ignored definitions. Default: `["//"]` */
  ignored_definitions?: string[];
}

export interface MD054Options {
  /** Allow autolinks. Default: `true` */
  autolink?: boolean;
  /** Allow inline links and images. Default: `true` */
  inline?: boolean;
  /** Allow full reference links and images. Default: `true` */
  full?: boolean;
  /** Allow collapsed reference links and images. Default: `true` */
  collapsed?: boolean;
  /** Allow shortcut reference links and images. Default: `true` */
  shortcut?: boolean;
  /** Allow URL-style inline links. Default: `true` */
  url_inline?: boolean;
}

export interface MD055Options {
  /** Table pipe style. Default: `"consistent"` */
  style?:
    | "consistent"
    | "leading_only"
    | "trailing_only"
    | "leading_and_trailing"
    | "no_leading_or_trailing";
}

// MD056 – no configurable options

// MD058 – no configurable options

// MD059 – no configurable options

export interface MD060Options {
  /** Table column style. Default: `"any"` */
  style?: "any" | "aligned" | "compact" | "tight";
  /** Aligned delimiter columns. Default: `false` */
  aligned_delimiter?: boolean;
}

// ─── Rule options map ─────────────────────────────────────────────────────────

export interface RuleOptionsMap {
  "markdownlint/md001": MD001Options;
  "markdownlint/md003": MD003Options;
  "markdownlint/md004": MD004Options;
  "markdownlint/md005": Record<string, never>;
  "markdownlint/md007": MD007Options;
  "markdownlint/md009": MD009Options;
  "markdownlint/md010": MD010Options;
  "markdownlint/md011": Record<string, never>;
  "markdownlint/md012": MD012Options;
  "markdownlint/md013": MD013Options;
  "markdownlint/md014": Record<string, never>;
  "markdownlint/md018": Record<string, never>;
  "markdownlint/md019": Record<string, never>;
  "markdownlint/md020": Record<string, never>;
  "markdownlint/md021": Record<string, never>;
  "markdownlint/md022": MD022Options;
  "markdownlint/md023": Record<string, never>;
  "markdownlint/md024": MD024Options;
  "markdownlint/md025": MD025Options;
  "markdownlint/md026": MD026Options;
  "markdownlint/md027": MD027Options;
  "markdownlint/md028": Record<string, never>;
  "markdownlint/md029": MD029Options;
  "markdownlint/md030": MD030Options;
  "markdownlint/md031": MD031Options;
  "markdownlint/md032": Record<string, never>;
  "markdownlint/md033": MD033Options;
  "markdownlint/md034": Record<string, never>;
  "markdownlint/md035": MD035Options;
  "markdownlint/md036": MD036Options;
  "markdownlint/md037": Record<string, never>;
  "markdownlint/md038": Record<string, never>;
  "markdownlint/md039": Record<string, never>;
  "markdownlint/md040": MD040Options;
  "markdownlint/md041": MD041Options;
  "markdownlint/md042": Record<string, never>;
  "markdownlint/md043": MD043Options;
  "markdownlint/md044": MD044Options;
  "markdownlint/md045": Record<string, never>;
  "markdownlint/md046": MD046Options;
  "markdownlint/md047": Record<string, never>;
  "markdownlint/md048": MD048Options;
  "markdownlint/md049": MD049Options;
  "markdownlint/md050": MD050Options;
  "markdownlint/md051": MD051Options;
  "markdownlint/md052": MD052Options;
  "markdownlint/md053": MD053Options;
  "markdownlint/md054": MD054Options;
  "markdownlint/md055": MD055Options;
  "markdownlint/md056": Record<string, never>;
  "markdownlint/md058": Record<string, never>;
  "markdownlint/md059": Record<string, never>;
  "markdownlint/md060": MD060Options;
}

// ─── Plugin ───────────────────────────────────────────────────────────────────

export interface MarkdownlintPlugin {
  meta: {
    name: string;
    version: string;
  };
  configs: {
    recommended: Linter.Config;
  };
  rules: Record<string, Rule.RuleModule>;
  processors: Record<string, never>;
}

declare const plugin: MarkdownlintPlugin;

export default plugin;
