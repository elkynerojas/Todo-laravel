<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;
use Exception;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $tasks = Task::where('user_id',$user->id)
        ->orderBy('done','ASC')
        ->orderBy('created_at','ASC')

        ->get();
        return response()->json([
            'tasks' => $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $task = Task::create([
                'name' => $request->get('name'),
                'description' => $request->get('description'),
                'user_id' => Auth::user()->id
            ]);
            return response()->json([
                'message' => 'Tarea agregada correctamente'
            ]);
        }catch(Exception $e){

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::find($id);

        $task->fill([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'done' => $request->get('done')
        ]);

        $task->save();
        return response()->json([
            'message' => 'Tarea actualizada correctamente',
            'task' => $task
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
