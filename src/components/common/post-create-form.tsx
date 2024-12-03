"use client";
import React from "react";
import { useActionState } from "react";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "./form-button";
import { div } from "framer-motion/client";

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action, isPending] = useActionState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg ">Create a post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(",")}
            />
            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}
            <FormButton isLoading={isPending}>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
