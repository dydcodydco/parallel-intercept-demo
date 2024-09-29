export default function DashboardLayout({
  children,
  team,
  analytics
}: {
    children: React.ReactNode,
    team: React.ReactNode,
    analytics: React.ReactNode
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>{team}</div>
        <div style={{flex: 1}}>{analytics}</div>
      </div>
    </div>
  )
}