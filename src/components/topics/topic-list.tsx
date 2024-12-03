import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";

import React from "react";
import paths from "../paths";
import { div } from "framer-motion/client";

const TopicList = async () => {
  const TopicList = await db.topic.findMany();

  const renderedTopics = TopicList.map((topic) => {
    return (
      <div key={topic.id} className="my-1 ml-2">
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });
  return <div className="flex flex-col gap-2 ">{renderedTopics}</div>;
};

export default TopicList;
