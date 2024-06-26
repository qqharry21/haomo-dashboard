'use client';

import type { Editor } from '@tiptap/react';

import { RichTextFormatting } from './rich-text-formatting';
import { RichTextHeading } from './rich-text-heading';
import { RichTextList } from './rich-text-list';
import { RichTextOther } from './rich-text-other';
import { RichTextTextStyle } from './rich-text-text-style';

export const RichTextToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className='mb-4 flex w-full flex-wrap items-center gap-2 rounded-md border border-border p-2'>
      <RichTextHeading editor={editor} />
      <RichTextTextStyle editor={editor} />
      <RichTextFormatting editor={editor} />
      <RichTextList editor={editor} />
      <RichTextOther editor={editor} />
    </div>
  );
};
