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
            Quaternion rotation = Quaternion.Euler(0, randomAngle, 0);
            GameObject rocket = Instantiate(rocketPrefab, transform.position, rotation);
            rocket.GetComponent<Rocket>().Launch();
        }
    }
}