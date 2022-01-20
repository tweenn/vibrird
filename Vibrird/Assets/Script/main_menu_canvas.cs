using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class main_menu_canvas : MonoBehaviour
{
	#if UNITY_WEBGL
		[DllImport("__Internal")] private static extern void ScanForToys();
	#else
		private static void ScanForToys()
		{
			Debug.Log("Scan For Toys Clicked");
		}
	#endif
}
