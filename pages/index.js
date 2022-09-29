import Head from "next/head";
import useSwr from "swr";
import { Typography, Tag, Progress, Space } from "antd";
import Table from "../components/table";
import styles from "../styles/Home.module.css";

const { Link, Title } = Typography;

const fetcher = (url) => fetch(url).then((res) => res.json());
const columns = [
  {
    key: 1,
    title: "Task Name",
    dataIndex: "Task Name",
    render: (text) => (
      <Link href="https://ant.design" target="_blank">
        {text}
      </Link>
    ),
  },
  {
    title: "ID",
    dataIndex: "id",
    key: 2,
  },
  {
    title: "Brand Name",
    dataIndex: "Brandname",
    width: 100,
    render: (text) => (
      <Link href="https://ant.design" target="_blank">
        {text}
      </Link>
    ),
    key: 3,
  },
  {
    title: "Tier",
    dataIndex: "Tier",
    width: 100,
    key: 4,
  },
  {
    title: "Type",
    dataIndex: "Type",
    width: 100,
    key: 5,
  },
  {
    title: "Token Progress",
    dataIndex: "Token Progress",
    width: 150,
    render: (text) => (
      <Progress
        percent={text.replace("%", "")}
        status="active"
        strokeColor="green"
      />
    ),
    key: 6,
  },
  {
    title: "Target Reach Progress",
    dataIndex: "Target Reach progress",
    width: 150,
    render: (text) => (
      <Progress percent={text.replace("%", "")} status="active" />
    ),
    key: 7,
  },
  {
    title: "Budget",
    dataIndex: "Budget",
    width: 100,
    key: 8,
  },
  {
    title: "Impressions",
    dataIndex: "Impressions",
    width: 100,
    key: 9,
  },
  {
    title: "Reach",
    dataIndex: "Reach",
    width: 100,
    key: 10,
  },
  {
    title: "Engagement Rate",
    dataIndex: "Engagement Rate",
    width: 100,
    key: 11,
  },
  {
    title: "Tokens Dispensed",
    dataIndex: "Tokens Dispensed",
    width: 100,
    key: 12,
  },
  {
    title: "Star Dispended",
    dataIndex: "Stars dispensed",
    width: 100,
    key: 13,
  },
  {
    title: "Tickets",
    dataIndex: "Tickets",
    width: 100,
    key: 14,
  },
  {
    title: "Bonus Set",
    dataIndex: "Bonus Set",
    width: 100,
    key: 15,
    render: (text) => (
      <Link href="https://ant.design" target="_blank">
        {text}
      </Link>
    ),
  },
  {
    title: "Tokens Added",
    dataIndex: "Tokens Added",
    width: 100,
    key: 16,
  },
  {
    title: "Viewers",
    dataIndex: "Viewers",
    width: 100,
    key: 17,
  },
  {
    title: "Incomplete",
    dataIndex: "Incomplete",
    width: 110,
    key: 18,
  },
  {
    title: "Complete",
    dataIndex: "Complete",
    width: 100,
    key: 19,
    render: (text, row) => <span>{row["Viewers"] - row["Incomplete"]}</span>,
  },
  {
    title: "Days Active",
    dataIndex: "Days Active",
    width: 100,
    key: 20,
  },
  {
    title: "End Date",
    dataIndex: "End Date",
    width: 100,
    key: 21,
  },
  {
    title: "State",
    dataIndex: "State",
    width: 100,
    key: 22,
    render: (text) => <Tag color="success">{text}</Tag>,
  },
];

export default function Home() {
  const { data } = useSwr("/api/task", fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Space direction="vertical">
          <>
          <Link href="/">
       Home
      </Link>
      <Link href="/submission">
      Submission
      </Link></>
          <Title level={3}>Nike Task</Title>
          <Table columnsData={columns} dataSource={data} />
        </Space>
      </main>
    </div>
  );
}
