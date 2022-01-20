using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pipe_generator : MonoBehaviour
{
	static float spawnTimer = 3.5f;
	private float spawnTimerCurrent = 0f;

	public GameObject pipe;

	void FixedUpdate()
	{
		ShouldSpawnPipe();
	}

	private void ShouldSpawnPipe()
	{
		spawnTimerCurrent += 1f * Time.deltaTime;

		if (spawnTimerCurrent >= spawnTimer)
		{
			spawnTimerCurrent = 0f;
			SpawnPipe();
		}
	}

	private void SpawnPipe()
	{
		Instantiate(pipe, transform.position, Quaternion.identity);
	}
}
