<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_tasks_for_authenticated_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $tasks = Task::factory()->count(3)->create(['user_id' => $user->id]);

        $response = $this->get('/api/tasks');

        $response->assertStatus(200)
                 ->assertJson(['tasks' => $tasks->toArray()]);
    }

    public function test_store_creates_task_for_authenticated_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $taskData = [
            'name' => 'New Task',
            'description' => 'Description of the new task',
        ];

        $response = $this->post('/api/tasks', $taskData);

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Tarea agregada correctamente']);

        $this->assertDatabaseHas('tasks', $taskData + ['user_id' => $user->id]);
    }

    public function test_update_updates_task_for_authenticated_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $task = Task::factory()->create(['user_id' => $user->id]);

        $updatedData = [
            'name' => 'Updated Task',
            'description' => 'Updated description',
            'done' => true,
        ];

        $response = $this->put("/api/tasks/{$task->id}", $updatedData);

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Tarea actualizada correctamente']);

        $this->assertDatabaseHas('tasks', $updatedData + ['id' => $task->id]);
    }

    public function test_destroy_deletes_task_for_authenticated_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $task = Task::factory()->create(['user_id' => $user->id]);

        $response = $this->delete("/api/tasks/{$task->id}");

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Tarea eliminada correctamente']);

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
