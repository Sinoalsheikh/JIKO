import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MainContent() {
  const departments = [
    { name: "Administration", workflows: 5, tasks: 12 },
    { name: "HR", workflows: 3, tasks: 8 },
    { name: "Finance", workflows: 4, tasks: 15 },
    { name: "Sales", workflows: 6, tasks: 20 },
  ]

  const workflows = [
    { name: "Employee Onboarding", department: "HR", status: "In Progress" },
    { name: "Invoice Processing", department: "Finance", status: "Completed" },
    { name: "Sales Lead Generation", department: "Sales", status: "Scheduled" },
  ]

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        <Card>
          <CardContent className="p-4">
            <p>Important system update scheduled for next week. Please save your work and log out by Friday 5 PM.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Departmental Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept) => (
            <Card key={dept.name} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Active Workflows: {dept.workflows}</p>
                <p>Pending Tasks: {dept.tasks}</p>
                <Button className="mt-2 w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Workflow Execution Summary</h2>
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <Card key={workflow.name} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{workflow.name}</h3>
                    <p className="text-sm text-gray-500">Department: {workflow.department}</p>
                    <p className="text-sm text-gray-500">Status: {workflow.status}</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Analytics</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

