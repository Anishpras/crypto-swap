import Header from '../components/Header'

const styles = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <h2>Main</h2>
      <h2>Transactions History</h2>
    </div>
  )
}
