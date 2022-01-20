using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pipe : MonoBehaviour
{
	static float velocity = 2f;
	void FixedUpdate()
	{
		transform.Translate(Vector3.right * -1 * velocity * Time.deltaTime);
	}
}
