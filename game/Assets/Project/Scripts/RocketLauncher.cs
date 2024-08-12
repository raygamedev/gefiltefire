using UnityEngine;
using System.Collections;

namespace Gefilte
{
    public class RocketLauncher : MonoBehaviour
    {
        [SerializeField] private GameObject rocketPrefab;
        [SerializeField] private float minTimeBetweenRockets = 0.3f;
        [SerializeField] private float maxTimeBetweenRockets = 4f;
        [SerializeField] private float randomAngleMin = 30f;
        [SerializeField] private float randomAngleMax = 80f;



        private void Start()
        {
            StartCoroutine(LaunchRocketsAtRandomIntervals());
        }

        private IEnumerator LaunchRocketsAtRandomIntervals()
        {
            while (true)
            {
                yield return new WaitForSeconds(Random.Range(minTimeBetweenRockets, maxTimeBetweenRockets));
                LaunchRocket();
            }
        }

        private void LaunchRocket()
        {
            float randomAngle = Random.Range(randomAngleMin, randomAngleMax);
            Quaternion randomRotation = Quaternion.Euler(0, 0, -1 * randomAngle);
            GameObject rocket = Instantiate(rocketPrefab, transform.position, randomRotation);
            rocket.GetComponent<Rocket>().Launch();
        }
    }
}